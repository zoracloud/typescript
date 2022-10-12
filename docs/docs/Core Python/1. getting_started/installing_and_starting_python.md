# Installing and Starting Python

* Installation of python on your system
* Write basic python code
* Get acquited with the python programming culture
* Origins of the name of the language

## Overview

* Python 2
* Python 3

![Python Versions](../images/python_version.png)

## Installing Python

### Windows

[Installing Python on Windows](https://docs.python-guide.org/starting/install3/win/)

### Mac

[Installing Python on Mac](https://docs.python-guide.org/starting/install3/osx/)

### Linux

[Installing Python on Linux](https://docs.python-guide.org/starting/install3/linux/)

## Interactive Python

Python has two basic modes: script and interactive. The normal mode is the mode where the scripted and finished .py files are run in the Python interpreter. Interactive mode is a command line shell which gives immediate feedback for each statement, while running previously fed statements in active memory. As new lines are fed into the interpreter, the fed program is evaluated both in part and in whole hence **REPL(READ EVALUATE PRINT LOOP)**.

Interactive mode is a good way to play around and try variations on syntax.

On macOS or linux, open a terminal and simply type "python". On Windows, bring up the command prompt and type "py", or start an interactive Python session by selecting "Python (command line)", "IDLE", or similar program from the task bar / app menu. IDLE is a GUI which includes both an interactive mode and options to edit and run files.

Python should print something like this:

```python

❯ python3
Python 3.8.5 (default, Sep  4 2020, 02:22:02)
[Clang 10.0.0 ] :: Anaconda, Inc. on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>

```

The >>> is Python's way of telling you that you are in interactive mode. In interactive mode what you type is immediately run. Try typing 1+1 in. Python will respond with 2. Interactive mode allows you to test out and see what Python will do. If you ever feel the need to play with new Python statements, go into interactive mode and try them out.

A sample interactive session:

```python
>>> 5
5
>>> print(5*7)
35
>>> "hello" * 2
'hellohello'
>>> "hello".__class__
<class 'str'>
>>>
```

However, you need to be careful in the interactive environment to avoid confusion. For example, the following is a valid Python script:

```python
if 1:
  print("True")
print("Done")
```
If you try to enter this as written in the interactive environment, you might be surprised by the result:

```python
>>> if 1:
...   print("True")
... print("Done")
  File "<stdin>", line 3
    print("Done")
    ^
SyntaxError: invalid syntax
```
What the interpreter is saying is that the indentation of the second print was unexpected. You should have entered a blank line to end the first (i.e., "if") statement, before you started writing the next print statement. For example, you should have entered the statements as though they were written:
```python
if 1:
  print("True")
 
print("Done")
```
Which would have resulted in the following:

```python
>>> if 1:
...   print("True")
...
True
>>> print("Done")
Done
>>>
```

* Instead of Python exiting when the program is finished, you can use the -i flag to start an interactive session. This can be very useful for debugging and prototyping.

```sh
python3 -i hello.py
```

[From the Docs](https://docs.python.org/3/tutorial/interpreter.html#)

## Significant White Space

**Guido van Rossum** The creator of python  made the original decision and it stuck.

In order to separate blocks of code (like for loops, if blocks and function definitions) the compiler/interpreter needs something to tell it when a block ends.Curly braces and end statements are perfectly valid ways of providing this information for the compiler.

For a human to be able to read the code indentation is a much better way of providing the visual cues about block structure.As indentation also contains all the information for the compiler, to use both would be redundant.

As indentation is better for humans, it makes sense to use that for the compiler too. It has the advantage that Python programs tend to be uniformly and consistently indented, removing one hurdle to understanding other people's code.

Python does not mandate how you indent (two spaces or four, tabs or spaces - but not both), just that you do it consistently. Those that get used to the Python way of doing things tend to start seeing curly braces as unnecessary line noise that clutters code. On the other hand, is possibly the single biggest reason why some developers refuse to even try Python.

RULES:

* Prefer **Four spaces**
* **Never** mix spaces and Tabs
* Be **consistent** on consecutive lines
* Only deviate to **improve** readability

## Python culture, the zen of python and the PEP

The **Zen of Python** is a collection of 19 "guiding principles" for writing computer programs that influence the design of the Python programming language.

**Tim Peters** an American software developer who is known for creating the **Timsort hybrid sorting algorithm** and for his major contributions to the Python programming language and its original CPython implementation wrote this set of principles.

```python
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
>>>
```

**PEP** stands for Python Enhancement Proposal. A PEP is a design document providing information to the Python community, or describing a new feature for Python or its processes or environment. The PEP should provide a concise technical specification of the feature and a rationale for the feature.

[PEP](https://peps.python.org/pep-0000/)

## Python Standard Library

**Batteries Included (slang),** in a product usability (mostly in software) it states that the product comes together with all possible parts required for full usability in the context of python its the standard libraries

The Python Standard Library is a collection of script modules accessible to a Python program to simplify the programming process and removing the need to rewrite commonly used commands. They can be used by 'calling/importing' them at the beginning of a script.

A list of the Standard Library modules can be found at [Python standard Library](https://docs.python.org/3/library/)

The ```import``` keyword

```python
>>> import math
>>> math.sqrt(2)
1.4142135623730951
>>>
```