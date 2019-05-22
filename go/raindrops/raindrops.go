// Package raindrops provides Convert function.
package raindrops

import "strconv"

// Convert function converts numbers into a string.
func Convert(num int) string {
	var result string

	if num%3 == 0 {
		result += "Pling"
	}
	if num%5 == 0 {
		result += "Plang"
	}
	if num%7 == 0 {
		result += "Plong"
	}
	if result == "" {
		result += strconv.Itoa(num)
	}
	return result
}
