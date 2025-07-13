export default function SkillsStats({ skills, lang = 'en' }) {
  const stats = [
    {
      label: lang === 'ar' ? 'إجمالي المهارات' : 'Total Skills',
      value: skills.length,
      icon: '🎯',
      color: 'from-blue-500 to-purple-500'
    },
    {
      label: lang === 'ar' ? 'تطوير الجوال' : 'Mobile Development',
      value: skills.filter(s => s.category === (lang === 'ar' ? 'تطوير الجوال' : 'Mobile Development')).length,
      icon: '📱',
      color: 'from-green-500 to-blue-500'
    },
    {
      label: lang === 'ar' ? 'الخلفية والسحابة' : 'Backend & Cloud',
      value: skills.filter(s => s.category === (lang === 'ar' ? 'الخلفية والسحابة' : 'Backend & Cloud')).length,
      icon: '☁️',
      color: 'from-orange-500 to-red-500'
    },
    {
      label: lang === 'ar' ? 'الأدوات والتقنيات' : 'Tools & Technologies',
      value: skills.filter(s => s.category === (lang === 'ar' ? 'الأدوات والتقنيات' : 'Tools & Technologies')).length,
      icon: '🛠️',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="glass-effect rounded-xl p-4 text-center">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} text-white text-xl mb-3`}>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
} 