import 'package:shared_preferences/shared_preferences.dart';

class StorageService {
  static const String _keySteps = 'steps';
  static const String _keyGoal = 'goal';
  static const String _keyIncrement = 'increment';
  static const String _keyLastDate = 'last_date';

  static Future<Map<String, dynamic>> loadData() async {
    final prefs = await SharedPreferences.getInstance();
    
    final today = DateTime.now().toIso8601String().split('T')[0];
    final lastDate = prefs.getString(_keyLastDate) ?? today;

    if (lastDate != today) {
      // Auto reset if date changed
      await prefs.setInt(_keySteps, 0);
      await prefs.setString(_keyLastDate, today);
      return {
        'steps': 0,
        'goal': prefs.getInt(_keyGoal) ?? 10000,
        'increment': prefs.getInt(_keyIncrement) ?? 500,
        'lastDate': today,
      };
    }

    return {
      'steps': prefs.getInt(_keySteps) ?? 0,
      'goal': prefs.getInt(_keyGoal) ?? 10000,
      'increment': prefs.getInt(_keyIncrement) ?? 500,
      'lastDate': lastDate,
    };
  }

  static Future<void> saveSteps(int steps) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_keySteps, steps);
  }

  static Future<void> saveGoal(int goal) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_keyGoal, goal);
  }

  static Future<void> saveIncrement(int increment) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_keyIncrement, increment);
  }

  static Future<void> resetSteps() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_keySteps, 0);
  }
}
