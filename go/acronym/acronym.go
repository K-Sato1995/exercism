// Package acronym should have a package comment that summarizes what it's about.
package acronym

import (
	"fmt"
	"strings"
	"regexp"
)
// Abbreviate should have a comment documenting it.
func Abbreviate(s string) string {
	var result string
	s_arr := to_array(trimString(s))
	fmt.Println(s_arr)
	for _, value := range s_arr {
		first_letter := value[:1]
		result += first_letter
	}
	return Capitalize(result)
}

// Capitalize should return a capitalized string.
func Capitalize(s string) string {
	return strings.ToUpper(s)
}

// to_array converts a string to an array.
func to_array(s string) []string {
	return strings.Fields(s)
}

// trimString replaces non-word character to a space
func trimString(s string) string {
	var re = regexp.MustCompile(`\w|\b`)
	return re.ReplaceAllString(s, ` `)
}
