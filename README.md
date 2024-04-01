# Setup
## Installation

#### Mac OS
```
brew install k6
```
### Alternative Installation
### Docker
```
docker pull grafana/k6
```
Additional instructions can be found at https://k6.io/

# Instructions
Performance Test Exercise - write a performance test for url https://test.k6.io/flip_coin.php 
1. Write a script that will performance test the listed url.  
2. The script should be sending a parameter of either 'heads' or 'tails'. By default, it sends 'heads'
3. Write a check to ensure the response is 200.
4. Identify and explain what the important metrics are from the output and explain the reasoning.

Bonus1: Record the number of wins and losses for each scenario that gets executed.
Bonus2: Based on the website, what other things can be tested. What other scenarios should be tested? 
