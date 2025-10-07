import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { generateMeetingLink, sendCalendarInvite } from "../../lib/meeting";

export default function BookingsAdmin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generatingMeetings, setGeneratingMeetings] = useState({});
  const [selectedMessage, setSelectedMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('adminAuthenticated');
      if (!isAuthenticated) {
        router.push('/admin/login');
        return;
      }
    }
    fetchBookings();
  }, [router]);

  const fetchBookings = async () => {
    try {
      const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const bookingsData = [];
      
      querySnapshot.forEach((doc) => {
        bookingsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setBookings(bookingsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("Failed to load bookings");
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate();
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const convertToDhakaTime = (dateString, timeString, userTimezone) => {
    if (!dateString || !timeString) return "Not specified";
    
    try {
      // Create date in user's timezone
      const userDateTime = new Date(`${dateString}T${timeString}:00`);
      
      // Convert to Dhaka time (UTC+6)
      const dhakaTime = userDateTime.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      return dhakaTime;
    } catch (error) {
      console.error('Timezone conversion error:', error);
      return `${dateString} at ${timeString} (User: ${userTimezone || 'Unknown'})`;
    }
  };

  const getTimezoneOffset = (timezone) => {
    if (!timezone) return "Unknown";
    
    try {
      const date = new Date();
      const options = { timeZone: timezone, timeZoneName: 'longOffset' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(date);
      const offsetPart = parts.find(part => part.type === 'timeZoneName');
      return offsetPart ? offsetPart.value : timezone;
    } catch (error) {
      return timezone;
    }
  };

  const formatMeetingPlatform = (platform) => {
    if (!platform) return "Not specified";
    
    const platformMap = {
      'google-meet': 'Google Meet',
      'zoom': 'Zoom'
    };
    
    return platformMap[platform] || platform;
  };

  const handleGenerateMeeting = async (booking) => {
    setGeneratingMeetings(prev => ({ ...prev, [booking.id]: true }));
    
    try {
      // Generate meeting link
      const meetingDetails = await generateMeetingLink(booking);
      
      // Update booking in Firestore with meeting details
      const bookingRef = doc(db, "bookings", booking.id);
      await updateDoc(bookingRef, {
        meetingDetails,
        status: 'confirmed',
        confirmedAt: new Date()
      });
      
      // Send calendar invite
      await sendCalendarInvite(booking, meetingDetails);
      
      // Refresh bookings to show updated data
      fetchBookings();
      
      alert(`Meeting generated successfully! Link: ${meetingDetails.meetingLink}`);
    } catch (error) {
      console.error('Error generating meeting:', error);
      alert('Failed to generate meeting. Please try again.');
    } finally {
      setGeneratingMeetings(prev => ({ ...prev, [booking.id]: false }));
    }
  };

  const formatMeetingLink = (meetingDetails) => {
    if (!meetingDetails || !meetingDetails.meetingLink) return "Not generated";
    
    return (
      <a 
        href={meetingDetails.meetingLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Join Meeting
      </a>
    );
  };

  if (loading) {
    return (
      <Layout title="Bookings Admin | Dry Cleaning POS">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading bookings...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Bookings Admin | Dry Cleaning POS">
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Bookings Dashboard</h1>
                  <p className="text-gray-600 mt-2">Manage and view all consultation bookings</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{bookings.length}</div>
                  <div className="text-sm text-gray-500">Total Bookings</div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {bookings.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Bookings Yet</h3>
                  <p className="text-gray-600">Bookings will appear here once customers schedule consultations.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Email</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Business</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Preferred Date/Time</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Dhaka Time</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Client Timezone</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Meeting Platform</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Meeting Link</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Submitted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">{booking.name}</div>
                            <div className="text-sm text-gray-500">{booking.phone || "No phone"}</div>
                          </td>
                          <td className="py-3 px-4">
                            <a 
                              href={`mailto:${booking.email}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {booking.email}
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-900">{booking.business || "Not specified"}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-900">
                              {booking.preferredDate || "Not specified"}
                              {booking.preferredTime && ` at ${booking.preferredTime}`}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-900 font-medium">
                              {convertToDhakaTime(booking.preferredDate, booking.preferredTime, booking.userTimezone)}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <div className="text-gray-900 font-medium">
                                {booking.userTimezone || "Unknown"}
                              </div>
                              <div className="text-gray-500">
                                {getTimezoneOffset(booking.userTimezone)}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <div className="text-gray-900 font-medium">
                                {formatMeetingPlatform(booking.meetingPlatform)}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              {formatMeetingLink(booking.meetingDetails)}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              booking.status === 'pending' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : booking.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status || 'pending'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col space-y-2">
                              {booking.message && (
                                <button
                                  onClick={() => setSelectedMessage({
                                    name: booking.name,
                                    message: booking.message
                                  })}
                                  className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition-colors text-center"
                                >
                                  View Message
                                </button>
                              )}
                              {!booking.meetingDetails && (
                                <button
                                  onClick={() => handleGenerateMeeting(booking)}
                                  disabled={generatingMeetings[booking.id]}
                                  className={`text-xs px-3 py-1 rounded ${
                                    generatingMeetings[booking.id]
                                      ? 'bg-gray-400 cursor-not-allowed'
                                      : 'bg-blue-600 hover:bg-blue-700'
                                  } text-white transition-colors`}
                                >
                                  {generatingMeetings[booking.id] ? 'Generating...' : 'Generate Meeting'}
                                </button>
                              )}
                              <a 
                                href={`mailto:${booking.email}?subject=POS Consultation Confirmation&body=Hi ${booking.name},%0D%0A%0D%0AYour consultation has been confirmed!%0D%0A%0D%0ADate: ${booking.preferredDate}%0D%0ATime: ${booking.preferredTime}%0D%0AMeeting Platform: ${formatMeetingPlatform(booking.meetingPlatform)}%0D%0A%0D%0ALooking forward to our call!`}
                                className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors text-center"
                              >
                                Send Email
                              </a>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {formatDate(booking.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={fetchBookings}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📅</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{bookings.length}</div>
                    <div className="text-sm text-gray-500">Total Bookings</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-yellow-600 text-xl">⏳</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {bookings.filter(b => b.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-500">Pending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">✅</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {bookings.filter(b => b.status === 'confirmed').length}
                    </div>
                    <div className="text-sm text-gray-500">Confirmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Popup Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Message from {selectedMessage.name}
                </h3>
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {selectedMessage.message || "No message provided."}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
