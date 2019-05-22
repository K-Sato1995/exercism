// Package hamming provides Distance function.
package hamming

import (
	"errors"
	"strings"
)

// Distance calculates the Hamming difference between two DNA strands.
func Distance(a, b string) (int, error) {
	strA := strings.Split(a, "")
	strB := strings.Split(b, "")

	if len(strA) != len(strB) {
		lengtherror := errors.New("The lengths are different")
		return 0, lengtherror
	}

	count := 0
	for index, value := range strA {
		if value != strB[index] {
			count++
		}
	}

	return count, nil
}
