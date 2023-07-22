---
slug: example
name: Example Problem
---

## Example Problem

#### Summer 2021 Novice 3, Lattice Flowers

<br>

Goma was busy picking flowers for Peach when he discovered a patch of flowers in the form of an NxM lattice with one flower per point. Starting from point (1,1) of the lattice, Goma will walk in a straight line picking up all flowers in the points he passes through (including (1,1)). He wants to find a path to maximize the number of flowers he picks, and he also wants to know the number of ways to walk that will maximize the number of flowers he picks up.

### Input

You will answer T test cases (1≤T≤10) where each test case is: two integers N, M (2≤N,M≤1000), the dimensions of the grid.

The first line of the input will be T, followed by T lines with two integers each N and M respectively.

### Output

Two integers a and b where a is the maximum amount of flowers that can be picked up by Goma starting from (1,1) and b is the number of unique ways he can walk to pick up flowers starting from point (1,1).

### Sample Input

```
2
2 2
3 2
```

<br>

### Sample Output

```
2 3
3 1
```

<br>

### Sample Explanation

In the first test case, Goma can pick up two flowers at most, and he can walk from (1,1) to (2,1); (1,1) to (2,2); and from (1,1) to (1,2) to pick up his 2 flowers

In the second test case, it can be proven that Goma can only pick up 3 flowers at best, walking from (1,1) to (3,1).

### Think you've solved it?

* Submit the problem
  * Here: <https://codeforces.com/gym/103241/problem/C>
  * You will need to make a codeforces account: <https://codeforces.com/register>
* Solution explanation
  * <https://github.com/chessbot108/tc_edi/blob/main/teamscode_summer_2021_editorial_full.pdf>
* Model solution
  * <https://github.com/chessbot108/tc_edi/blob/main/latticeflowers/model.cpp>
* Try more problems from the last contest
  * <https://codeforces.com/gym/103241>
