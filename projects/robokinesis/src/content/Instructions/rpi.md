---
title: RPi Cross compilation
order: 6
type: overview
---
<ContentColumn>

# Steps for RPi Cross compilation
install qemu qemu-user qemu-user-static

```bash
yay -S qemu-user-static
```
Insert the SD card and check mount points using `lsblk` command

Mount sd card and copy qemu-arm-static to sd card

```bash
sudo mount /dev/mmcblk0p2 /mnt/root    
sudo mount /dev/mmcblk0p1 /mnt/root/boot     
sudo cp /usr/bin/qemu-arm /mnt/root/usr/bin  
sudo cp /usr/bin/qemu-arm-static /mnt/root/usr/bin
```
Mount bind host system with sd card
```bash 
sudo mount -o bind /dev /mnt/root/dev  
sudo mount -o bind /proc /mnt/root/proc  
sudo mount -o bind /sys /mnt/root/sys   
sudo mount --bind /dev/pts /mnt/root/dev/pts 
sudo  mount -t proc /proc /mnt/root/proc/ 
```
Chroot into sd card and compile code 
```bash
sudo chroot /mnt/root /bin/bash
#loggedin as root
su ubuntu
source /opt/ros/galactic/setup.zsh
 
colcon --log-level=debug build --packages-skip-build-finished --packages-skip ros1_bridge 

# To use all cores of host machine set makeflags variable to max
MAKEFLAGS="-j8" colcon build --symlink-install --packages-skip ros1_bridge --event-handlers console_direct+ --packages-skip-build-finished 
```
Exit chroot and unmount in reverse tree order
```bash
exit

sudo umount /mnt/root/{dev/pts,dev,sys,proc,boot,}    
sudo umount /dev/mmcblk0p2 /dev/mmcblk0p1  
```
connect to internet while chrooted into sd card
```bash
sudo mount -o bind /etc/resolv.conf /mnt/root/etc/resolv.conf
# or
sudo cp /etc/resolv.conf /mnt/root/etc/resolv.conf
```
-------------------------------------------------------
## References:
https://wiki.archlinux.org/title/QEMU
https://wiki.debian.org/RaspberryPi/qemu-user-static  
https://forums.raspberrypi.com/viewtopic.php?t=8478
https://hjortsberg.org/notes/Installing-Debian-packages-in-ArchLinux-using-debtap.html

</ContentColumn>

> Author: [Mihir Patel](https://github.com/mihyr)
