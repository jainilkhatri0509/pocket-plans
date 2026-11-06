export const defaults = { minutes: 30, budget: 50, company: 'friends', mood: 'any' };

export function matches(activities, preferences) {
  return activities.filter(activity =>
    activity.minutes <= preferences.minutes &&
    activity.cost <= preferences.budget &&
    (activity.company === 'either' || activity.company === preferences.company) &&
    (preferences.mood === 'any' || activity.moods.includes(preferences.mood))
  );
}
export const price = cost => cost === 0 ? 'Free' : `₹${cost}`;

