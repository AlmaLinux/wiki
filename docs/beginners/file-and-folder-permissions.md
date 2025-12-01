---
title: "File and Folder Permissions"
---

<hr>

| 💡  | Experience Level | ⭐☆☆☆☆ |
| --- | ---------------- | ------ |

###### last updated: 2024-09-10

# Introduction

By design, Linux has several layers of security, from the kernel all the way up to user-facing applications. One of those layers is file and folder permissions. Since the very beginning of Linux, those permissions have been a crucial aspect of security.

And because Linux is a multi-user operating system, file and folder permissions become even more important. Think about it this way: If any user on a Linux system could access any file or folder owned by another user, security and privacy would be a problem. Because of that, Linux uses a system of permissions and ownership. 

## Fundamental Concepts

There are two different methods for changing folder and file permissions on Linux:

- absolute - which requires users to know the numeric number associated with each permission.
- symbolic - which only requires the use of letters associated with users (user, group, and other)  and permissions (such as read, write, and execute). 

## Key Takeaways

To understand file and folder permission, there are three different types of owners:

- User - the user who is the primary owner of a file or folder.
- Group - any user who's part of a group with access to a file or folder.
- Other - anyone with access to the system.

There are also three different types of permissions:

- Read - a user can view and/or copy the contents of a file.
- Write - a user can modify the contents of a file.
- Execute - a user can run the file (if it's an executable app or script).

The above permissions hold true for both files and folders.

If you issue the command ls -l within a directory, you'll see all of your files/folders listed along with their permissions. A typical entry might look like this:

`-rw-rw-r--  1 jackuser jackgroup     0 Jul 16 13:04  testfile`

Here's the breakdown of that listing:

- - - the file type
- rw-rw-r-- - the permissions
- 1 - number of hard links
- jack - owner
- jack - group
- 0 - file size
- July 16 13:04 - modification timestamp
- testfile - the filename

What we want to focus on is the permissions. In our example that's `rw-rw-r--`. How this breaks down is simple. The permissions section is broken into three sections: owner, group, and other, each of which can have read (r), write (w), and/or execute (x) permissions. So our example breaks down like this:

- owner has read and write permissions.
- group has read and write permissions.
- other has read permissions.

If you see a `-` character, it means there are no permissions set for that. If the file had full permissions for all users, it would look like this:

`rwxrwxrwx`

So, `rwx` for owner, `rwx` for group, and `rwx` for other.

The question now is, how do we change that? With the chmod command, which has two different modes: absolute and symbolic. The easiest method is symbolic. Why? With absolute mode, you have to remember the following:

- read permission = 4
- write permission = 2
- execute permission = 1
- no permission = 0

To change the permission in absolute mode, you add the permissions you want for each group. For example, if you want owner to have `rwx` permission, the total is 7. If you wanted group to have read and write permission, the total is 6, if you wanted to give other only read permission, the total is 4. String them together and you get 764. To make that change, the command would be:

`chmod 764 testfile`

For those who don't want to worry about memorizing the value assigned to each permission, you can use the symbolic method. To use this method, you have to assign by group, which (if you'll remember) are (u)ser, (g)roup, and (o)ther.

Let's say you want to give the 764 permission to the `testfile` file, using symbolic method. To do that, we'll first change the permission for owner with:

`chmod u+rwx testfile`

Next, we assign the rw permission to group with:

`chmod g+rw testfile`

Finally, we set the permissions for other with:

`chmod o+r testfile`

You could also use - to remove permissions. For example, if you want to remove group write permissions from the file, that command would be:

`chmod g-w testfile`

You can also change the permissions for certain or all groups at once. Say you want to give user and group read/write permissions. That could be achieved with:

`chmod ug+rw testfile`

If you accidentally give both group and other executable permissions, you could strip it with:

`chmod go-x testfile`

You could also string them together like this:

`chmod ug+rw, o-x testfile`

One final option is a for all. You could give all users read permission to a file with:

`chmod a+r testfile`

But what about folders? It's done the same way, the only difference being that you have the ability to not just change the permissions of the folder but all sub-folders and files within the folder. If you have the folder PROJECT1 and you wanted to give read and write permissions for group to everything within the folder, the command would use the -R (recursive) option like so:

`chmod -R ug+rw PROJECT1`

Finally, there's ownership. Every file on a Linux system has both a user and a group ownership. Remember, in our example above, both the user and owner were listed as jack. What if you had a group on your system, called dev1 and you want to change the group ownership to that? Thanks to the chown command, it's very simple:

`chown :dev1 testfile`

Notice dev1 is on the right side of the : character. That's because ownership is listed as user:group. If you wanted to change just the user ownership, the command would be something like this:

`chown olivia: testfile`

The above command would change the user ownership to olivia. If you want to change both user and group ownership, the command could be:

`chown olivia:dev1 testfile`

And that is the basics of file and folder permissions in AlmaLinux. This skill will come in very handy throughout your career as a Linux user or admin.
