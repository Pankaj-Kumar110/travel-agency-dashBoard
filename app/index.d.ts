import type { formatDate } from "./lib/utils";

declare interface BaseUser {
  id: string;
  name: string;
  email: string;
  dateJoined: string;
  imageUrl: string;
}

declare interface UserData extends BaseUser {
  itineraryCreated: number | string;
  status: "user" | "admin";
}

declare type User = BaseUser;

declare interface Country {
  name: string;
  coordinates: [number, number];
  value: string;
  openStreetMap?: string;
}

declare interface DropdownItem {
  name: string;
}

declare interface SelectProps {
  data: Country[] | DropdownItem[];
  onValueChange: (value: string) => void;
  id: string;
  label: string;
  placeholder: string;
}

declare interface PillProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

declare interface Activity {
  time: string;
  description: string;
}

declare interface DayPlan {
  day: number;
  location: string;
  activities: Activity[];
}

declare interface Location {
  city: string;
  coordinates: [number, number];
  openStreetMap: string;
}

declare interface Trip {
  id: string;
  name: string;
  description: string;
  estimatedPrice: string;
  duration: number;
  budget: string;
  travelStyle: string;
  interests: string;
  groupType: string;
  country: string;
  imageUrls: string[];
  itinerary: DayPlan[];
  bestTimeToVisit: string[];
  weatherInfo: string[];
  location: Location;
  payment_link: string;
}

declare interface TripCardProps {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  tags: string[];
  price: string;
}

declare interface StatsCard {
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}

declare interface TrendResult {
  trend: "increment" | "decrement" | "no change";
  percentage: number;
}

declare interface DashboardStats {
  totalUsers: number;
  usersJoined: {
    currentMonth: number;
    lastMonth: number;
  };
  userRole: {
    total: number;
    currentMonth: number;
    lastMonth: number;
  };
  totalTrips: number;
  tripsCreated: {
    currentMonth: number;
    lastMonth: number;
  };
}

declare interface CreateTripResponse {
  id?: string;
}

declare interface DestinationProps {
  containerClass?: string;
  bigCard?: boolean;
  activityCount: number;
  rating: number;
  bgImage: string;
  title: string;
}

type GetAllTripsResponse = {
  allTrips: Models.Document[];
  total: number;
};

declare interface UsersItineraryCount {
  imageUrl: string;
  name: string;
  count: number;
}

declare interface TripsInterest {
  imageUrl: string;
  name: string;
  interest: string;
}

declare interface InfoPillProps {
  text: string;
  image: string;
}

declare interface TripFormData {
  country: string;
  travelStyle: string;
  interest: string;
  budget: string;
  duration: number;
  groupType: string;
}

export const user = {
  name: "Pankaj",
};

export const dashboardStats = {
  totalUsers: 12450,
  usersJoined: { currentMonth: 218, lastMonth: 176 },
  totalTrips: 3210,
  tripsCreated: { currentMonth: 150, lastMonth: 342 },
  userRole: { total: 62, currentMonth: 22, lastMonth: 12 },
};

export const allTrips = [
  {
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "French Reverie",
    imageUrls: ["/assets/images/sample2.jpg"],
    itinerary: [{ location: "Paris" }],
    tags: ["Relaxation", "Culinary"],
    travelStyle: "Family",
    estimatedPrice: "$2,000",
  },
  {
    id: 3,
    name: "Zen Break",
    imageUrls: ["/assets/images/sample3.jpg"],
    itinerary: [{ location: "Japan" }],
    tags: ["Shopping", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: 4,
    name: "Adventure in Westeros",
    imageUrls: ["/assets/images/sample4.jpg"],
    itinerary: [{ location: "Croatia" }],
    tags: ["Historical", "Culture"],
    travelStyle: "Friends",
    estimatedPrice: "$4,000",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "/assets/images/david.webp",
    dateJoined: formatDate("2025-01-01"),
    itineraryCreated: 10,
    status: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "/assets/images/david.webp",
    dateJoined: formatDate("2025-01-02"),
    itineraryCreated: 4,
    status: "user",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john.smith@example.com",
    imageUrl: "/assets/images/david.webp",
    dateJoined: formatDate("2025-01-03"),
    itineraryCreated: 8,
    status: "admin",
  },
];

