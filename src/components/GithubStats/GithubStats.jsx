import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "vaishnavichaudhari910";
const LEETCODE_USERNAME = "vaishnavichaudhari011";

const StatCard = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex-1 min-w-[120px] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center hover:border-[#8245ec]/50 transition-colors duration-300"
  >
    <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
    <p className="text-xs sm:text-sm text-gray-400 mt-1">{label}</p>
  </motion.div>
);

const ProgressBar = ({ label, solved, total, color }) => {
  const pct = total ? Math.min((solved / total) * 100, 100) : 0;
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs sm:text-sm mb-1.5">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">
          {solved} / {total}
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};

const GithubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [githubError, setGithubError] = useState(null);
  const [leetcodeError, setLeetcodeError] = useState(null);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        setGithubData(await res.json());
      } catch (err) {
        console.error("GitHub fetch failed:", err);
        setGithubError(err.message);
      }
    };

    const fetchLeetcode = async () => {
      try {
        const res = await fetch(`https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`);
        if (!res.ok) throw new Error(`LeetCode API returned ${res.status}`);
        const data = await res.json();
        if (data.status === "error") throw new Error(data.message || "User not found");
        setLeetcodeData(data);
      } catch (err) {
        console.error("LeetCode fetch failed:", err);
        setLeetcodeError(err.message);
      }
    };

    Promise.allSettled([fetchGithub(), fetchLeetcode()]).finally(() =>
      setLoading(false)
    );
  }, []);

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#0a0a0f] pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 font-sans"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-[130px] opacity-30"
          style={{ background: "radial-gradient(circle, #8245ec, transparent 70%)" }}
          animate={{ x: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 md:mb-16"
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#a855f7] uppercase">
          Code activity
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          GitHub &amp; Coding Stats
        </h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* GitHub summary stats */}
        {githubData && (
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <StatCard label="Public Repos" value={githubData.public_repos} delay={0} />
            <StatCard label="Followers" value={githubData.followers} delay={0.1} />
            <StatCard label="Following" value={githubData.following} delay={0.2} />
          </div>
        )}
        {githubError && (
          <p className="text-red-400 text-sm">
            GitHub stats failed to load: {githubError}
          </p>
        )}

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 overflow-x-auto"
        >
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Contribution Graph
          </h3>
          <img
            src={`https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`}
            alt="GitHub contribution graph"
            className="w-full min-w-[600px]"
          />
        </motion.div>

        {/* LeetCode stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7"
        >
          <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
            LeetCode Progress
          </h3>

          {loading && (
            <p className="text-gray-400 text-sm">Loading stats...</p>
          )}

          {!loading && leetcodeData && (
            <>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                <StatCard label="Total Solved" value={leetcodeData.totalSolved} delay={0} />
                <StatCard label="Ranking" value={leetcodeData.ranking?.toLocaleString()} delay={0.1} />
              </div>

              <ProgressBar
                label="Easy"
                solved={leetcodeData.easySolved}
                total={leetcodeData.totalEasy}
                color="#22c55e"
              />
              <ProgressBar
                label="Medium"
                solved={leetcodeData.mediumSolved}
                total={leetcodeData.totalMedium}
                color="#eab308"
              />
              <ProgressBar
                label="Hard"
                solved={leetcodeData.hardSolved}
                total={leetcodeData.totalHard}
                color="#ef4444"
              />
            </>
          )}

          {!loading && !leetcodeData && (
            <p className="text-gray-500 text-sm">
              {leetcodeError
                ? `LeetCode stats unavailable: ${leetcodeError}`
                : "LeetCode stats unavailable right now — please try refreshing."}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;