/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    
  var binSearch = function(start, end) {
      let mid = Math.ceil((start + end)/2)
      if (isBadVersion(mid)) {
          if(!isBadVersion(mid-1)) {
              return mid
          }
          return binSearch(start, mid-1)
      }
      return binSearch(mid+1, end)
  };

  
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  
  return function(n) {
      return binSearch(1, n)
  };
};
