Black Jack game
=============================

[![Build Status](https://travis-ci.org/janaxs/blackjack.svg?branch=master)](https://travis-ci.org/janaxs/blackjack)
[![CircleCI](https://circleci.com/gh/janaxs/blackjack.svg?style=svg)](https://circleci.com/gh/janaxs/blackjack)
[![Coverage Status](https://coveralls.io/repos/github/janaxs/blackjack/badge.svg)](https://coveralls.io/github/janaxs/blackjack)
[![codecov](https://codecov.io/gh/janaxs/blackjack/branch/master/graph/badge.svg)](https://codecov.io/gh/janaxs/blackjack)

To show off test tools and a CI chain in JavaScript.



Run testsuite
-------------------------------

Clone the repo and run the testsuite using a local environment or using Docker.



### Local development environment

Install the development tools and execute the validation tools and the testsuite.

```
make install
make test
```

Code coverage report in HTML is available in `build/coverage`.



### Run tests in Docker

Use `docker-compose` to run the validation tools and the testsuite in one of several available Docker containers.

```
# node latest
docker-compose run node_latest make check test

# node v7
docker-compose run node_7 make check test

# node v6
docker-compose run node_6 make check test
```



```                                                            
 .                                                             
..:  Copyright (c) 2017 Mikael Roos, mos@dbwebb.se             
```                                                            
