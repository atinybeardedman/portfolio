<template>
  <Layout>
    <section>
      <h1 class="title">About Me</h1>
      <article>
        <h2>My Background</h2>
        <div>
          I'm a teacher turned web developer who loves solve problems using
          code. Although I have a degree in Chemistry and Education, I have
          taught myself web development and have been teaching fundamentals of
          computer science for the past 6 years as well as building specialized
          web applications. I am a passionate problem solver; and that passion
          has applied to my teaching career, my work as a technology
          coordinator, as well as my web application development. I am currently
          creating applications using technologies such as Vue.js, Typescript,
          Angular, and static site generation,
        </div>
      </article>
      <article>
        <h2>My Developer Story</h2>
        <div>
          <p>
            During college I began exploring web development through self study,
            and was making simple websites for friends and peers. Once I began
            teaching it became clear that there were problems that my school was
            having that could be solved using code, and so I offered to continue
            my learning through creating internal applications. Firstly, the
            school needed a way to easily account for its boarding students so I
            built a customized, real time web application to easily allow the
            staff to check students in at meal times, sign them off campus for
            trips, and track maintenance requests. This system quickly and easily
            replaced the paper system that was previously being used. It became
            clear that this new system would ideally integrate with academic day
            attendance procedures as well, and so I built out a customized
            attendance system using the same architecture so as to provide a full
            accountability system for all students. This project soon grew into a
            full student information system where it was used for course
            registration, an academic feedback system, distribution list
            management, and much more. 
          </p>
          <p>
            Beyond these larger projects for the school
            as a whole I also built many small applications for my partner to use
            in her math classes when she teaches things like fractal geometry or
            modular string art. I also built some simple websites for my own
            classes to demonstrate various web development concepts or to provide
            a working simulation for a robotics project I assign to students.
          </p>
        </div>
      </article>
      <article>
        <h2>Most Recent Projects</h2>
        <div>
          My most recent project, a <g-link to="/solutions/nys-covid-dashboard">NYS Covid Dashboard</g-link>, was an
          attempt to better understand COVID-19 and how it affected the safety
          of our school community. Living in New York state we were subject to
          regional based lock downs in the spring of 2020, however it was very
          hard to find data sources that would show the regional rates as
          opposed to individual county rates. When it came time to open our
          school in the fall of 2020 we were still instructed to use this
          regional data that was not being collated in an easily accessible
          manner, so I built a customized dashboard that provided the metrics we
          needed to track at the regional level. I recognized that this work
          could easily be generalized for entirety of New York State and as such
          have since expanded the dashboard to do just that.
        </div>
      </article>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me",
  },
};
</script>


<style scoped>
section {
  padding: 2em 20%;
}
</style>