export interface User {
  id?: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  height: number | null;
  weight: number | null;
  diabetesType: string;
  activityLevel: string;
  role: 'USER' | 'ADMIN';
}

export interface DietPlan {
  id?: number;
  planName: string;
  description: string;
  user: User;
}

export interface FoodItem {
  id?: number;
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fats: number;
}

export interface Meal {
  id?: number;
  mealType: string;
  foodItems: FoodItem[];
  dietPlan: DietPlan;
}

export interface MealLog {
  id?: number;
  user: User;
  meal: Meal;
  consumedAt: string; // ISO string
}

export interface GlucoseLog {
  id?: number;
  user: User;
  glucoseLevel: number;
  measuredAt: string; // ISO string
}

