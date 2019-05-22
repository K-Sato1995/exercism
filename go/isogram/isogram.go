// Package isogram provides IsIsogram function
package isogram

import (
	"strings"
	"unicode"
)

// IsIsogram function checks if a word is an isogram.
func IsIsogram(word string) bool {
	var stripedString = stripeString(word)
	var arr = strings.Split(stripedString, "")

	for _, v := range arr {
		if isOnlyOne(stripedString, v) == false {
			return false
		}
	}
	return true
}

func isOnlyOne(word string, letter string) bool {
	if strings.Count(word, letter) != 1 {
		return false
	}
	return true
}

func stripeString(word string) string {
	var result string
	var reg = regexp.MustCompile("[^a-zA-Z0-9]+")
	result = reg.ReplaceAllString(word, "")
	result = strings.ToLower(result)
	result = strings.Join(strings.Fields(result), "")

	return result
}

func replaceNonString(word string) string {
	for i, v := range word {
		if unicode.IsLetter(v) == false {
			word[i] == 0
		}
	}
	return word
}
