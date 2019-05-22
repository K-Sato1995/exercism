// Package twofer provides ShareWith function.
package twofer

import "fmt"

// ShareWith returns a string
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
