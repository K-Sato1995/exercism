// Package strand contains ToRNA function
package strand

import "strings"

// ToRNA function returns corresponding RNA strands.
func ToRNA(dna string) string {
	dnaSlice := strings.Split(dna, "")

	for index, value := range dnaSlice {
		if value == "G" {
			dnaSlice[index] = "C"
		} else if value == "C" {
			dnaSlice[index] = "G"
		} else if value == "T" {
			dnaSlice[index] = "A"
		} else if value == "A" {
			dnaSlice[index] = "U"
		}
	}

	return strings.Join(dnaSlice, "")
}
