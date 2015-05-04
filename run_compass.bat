@echo off
echo Running `compass` using configuration file in config/ directory.
compass watch --time -c config/compass.rb -e development -s expanded
@rem compass watch --time -c config/compass.rb -e production -s compressed
@echo on