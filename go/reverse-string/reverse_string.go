package reverse

import (
	"fmt"
	"strings"
)

func Reverse(word string) string {
	var lastIndex = len(word) - 1
	var wordArray = strings.Fields(word)

	if lastIndex < 0 {
		return word
	}
	fmt.Println(wordArray)

	for i, _ := range wordArray {
		wordArray[i] = wordArray[lastIndex]
		lastIndex -= 1
	}
	return word
}
