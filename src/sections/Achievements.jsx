import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Users, Trophy } from "lucide-react";

const Achievements = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "1.5+",
      icon: Briefcase,
      color: "from-blue-400 to-cyan-300",
    },
    {
      label: "Completed Projects",
      value: "2+",
      icon: CheckCircle,
      color: "from-purple-400 to-pink-300",
    },
    {
      label: "Happy Clients",
      value: "0",
      icon: Users,
      color: "from-green-400 to-emerald-300",
    },
    {
      label: "Awards Won",
      value: "1",
      icon: Trophy,
      color: "from-orange-400 to-yellow-300",
    },
  ];

  return (
    <section className="py-10 bg-primary relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
