// Package scrabble provides
package scrabble

import "strings"

// Score function
func Score(chars string) int {

	var result int
	lowerdChars := strings.ToLower(chars)

	for _, v := range lowerdChars {
		result += calculate(v)
	}

	return result
}

func calculate(char rune) int {
	switch char {
	case 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't':
		return 1
	case 'd', 'g':
		return 2
	case 'b', 'c', 'm', 'p':
		return 3
	case 'f', 'h', 'v', 'w', 'y':
		return 4
	case 'k':
		return 5
	case 'j', 'x':
		return 8
	case 'q', 'z':
		return 10
	default:
		return 0
	}
}
