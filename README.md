Black Jack game
=============================

[![Build Status](https://travis-ci.org/janaxs/blackjack.svg?branch=master)](https://travis-ci.org/janaxs/blackjack)
[![CircleCI](https://circleci.com/gh/janaxs/blackjack.svg?style=svg)](https://circleci.com/gh/janaxs/blackjack)
[![Coverage Status](https://coveralls.io/repos/github/janaxs/blackjack/badge.svg)](https://coveralls.io/github/janaxs/blackjack)
[![codecov](https://codecov.io/gh/janaxs/blackjack/branch/master/graph/badge.svg)](https://codecov.io/gh/janaxs/blackjack)
[![Maintainability](https://api.codeclimate.com/v1/badges/a370febad556e9b8c6a7/maintainability)](https://codeclimate.com/github/janaxs/blackjack/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cde7544d784c425faa7ee660edcc07b6)](https://www.codacy.com/app/mosbth/blackjack?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=janaxs/blackjack&amp;utm_campaign=Badge_Grade)

[![Build Status](https://scrutinizer-ci.com/g/janaxs/blackjack/badges/build.png?b=master)](https://scrutinizer-ci.com/g/janaxs/blackjack/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/janaxs/blackjack/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/janaxs/blackjack/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/janaxs/blackjack/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/janaxs/blackjack/?branch=master)

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
# node latest (alpine)
docker-compose run node_latest make check test
docker-compose run node_alpine make check test

# node v7 (alpine)
docker-compose run node_7 make check test
docker-compose run node_7_alpine make check test

# node v6 (alpine)
docker-compose run node_6 make check test
docker-compose run node_6_alpine make check test
```



```                                                            
 .                                                             
..:  Copyright (c) 2017 Mikael Roos, mos@dbwebb.se             
```                                                            
