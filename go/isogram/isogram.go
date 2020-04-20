// Package isogram provides IsIsogram function
package isogram

import (
	"fmt"
	// "regexp"
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
	var strArray = strings.Split(word, "")

	for i, v := range strArray {
		if unicode.IsLetter(v) == false {
			fmt.Println(strArray[i])
			strings.Replace(word, strArray[i], " ", -1)
		}
	}

	result = strings.ToLower(result)
	result = strings.Join(strings.Fields(result), "")

	return result
}

func replaceNonString(word string) string {
	for _, v := range word {
		if unicode.IsLetter(v) == false {
			strings.Replace(word, v, " ", -1)
			fmt.Printf("%v\n", word)
		}
	}
	return word
}
