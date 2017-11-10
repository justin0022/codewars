/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  var uniqCourses = []
  var courses = []
  var prereqs = []
  prerequisites.map(pair => {
    var first = pair[0]
    var second = pair[1]
    if (!uniqCourses.includes(first)) {
      uniqCourses.push(first)
    }
    if (!uniqCourses.includes(second)) {
      uniqCourses.push(second)
    }
    courses.push(first)
    prereqs.push(second)
  })
  var noPrereqCourse = uniqCourses.filter(course => !prereqs.includes(course))

  if (noPrereqCourse.length === 0) return []

}