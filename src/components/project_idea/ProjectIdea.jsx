import React from 'react'
import './projectidea.css'

const ProjectIdea = () => {
  return (
    <section id='projectidea'>
      <h5>Finally, this is my..</h5>
      <h2>Project Idea</h2>

      <div className="container projectidea__container">
        <div className="projectidea__content">
          <article className='projectidea__details'>
            <p>
            Introducing the Raspberry Pi Pico-based USB password manager. The Raspberry Pi Pico-based USB password manager is a compact and portable device that allows you to securely store and manage your passwords on a USB drive. Using DuckyScript, a simple scripting language, you can easily access your passwords from any computer. The Raspberry Pi Pico provides the power and versatility for this device, making it a convenient and effective solution for managing your passwords. In light of recent data breaches happening around the world, the development of a USB password manager can provide peace of mind and protect your sensitive information.
            <br></br><br></br>
            The primary motivation for using a Raspberry Pi Pico-based USB password manager over web-based password managers is the added security and control. With a USB password manager, your passwords are stored locally on a physical device, rather than on a remote server. This means that you have complete control over your password data and are not at risk of it being accessed by unauthorized individuals. Additionally, a USB password manager is portable and can be easily accessed from any computer, providing greater convenience than web-based password managers which require an internet connection. This can be particularly useful for people who have multiple online accounts and need to regularly access and update their passwords.
            <br></br><br></br>
            The local password manager would have a variety of features, depending on the specific implementation. The features of such a password manager would include:
            <br></br><br></br>
          </p>
            <ul>
              <li>Storing multiple passwords: The password manager can store multiple passwords, allowing you to use it for different accounts and websites.</li>
              <li>Selecting passwords using buttons: The password manager can use buttons on the Raspberry Pi Pico to allow you to select which password to enter.</li>
              <li>Entering passwords automatically: When a password is selected, the password manager can automatically enter the password on the connected computer using the STRING command in DuckyScript.</li>
              <li>Password protection/2FA: The password manager can use a password protection system to prevent unauthorized access to the stored passwords, utilizing buttons combinations on the device. </li>
              <li>Encrypting stored passwords: The password manager can use encryption to protect the stored passwords, making them more secure.</li>
            </ul>
           <p>
            <br></br>
            This product would have several advantages over tools like LastPass. Firstly, its portability, as it could be easily carried around on a keychain or in a pocket, would make it convenient to use in a variety of situations, including when traveling or when using a public computer. Secondly, its customizable feature, based on DuckyScript, would allow for the creation of custom scripts to automate complex login processes and tailor the password manager to specific needs, making it more efficient than a generic password manager like LastPass. Lastly, the Raspberry Pi Pico's small size and low power consumption, combined with its high resistance to tampering and hacking attempts, would make the password manager highly secure, providing greater protection than a cloud-based password manager like LastPass.
            <br></br><br></br>
            However, there are some shortcomings to using a USB password manager compared to internet-based password managers. One disadvantage is that a USB password manager requires a physical device and a USB cable to access your passwords, whereas internet-based password managers can be accessed from any device with an internet connection. This can be inconvenient if you need to access your passwords from multiple devices or locations. Additionally, internet-based password managers often offer features such as password sharing and synchronization across devices, which are not available with a USB password manager. Despite this, this product would offer a combination of portability, customization, and security that would make it a better option than cloud-based services.
            <br></br><br></br>
            In order to develop the Raspberry Pi Pico-based USB password manager, the following equipment is needed:
            <br></br><br></br>
           </p>
           <ul>
              <li>Raspberry Pi Pico development board</li>
              <li>USB drive</li>
              <li>USB cable</li>
              <li>Computer</li>
              <li>Additional components: buttons, LEDs, display, etc.</li>
            </ul>
            <p>
              <br></br>
              In terms of skills, the following are required:
              <br></br><br></br>
            </p>
            <ul>
              <li>Knowledge of programming languages such as Python and DuckyScript</li>
              <li>Understanding of basic hardware and electronics</li>
              <li>Knowledge of encryption techniques</li>
            </ul>
            <p>
              <br></br>
              The Raspberry Pi Pico is a microcontroller development board that is designed for a wide range of applications. It features a dual-core Arm Cortex-M0+ processor and built-in peripherals, as well as GPIO pins for connecting sensors and actuators. It is flexible and versatile and can be programmed using a variety of languages and frameworks. It is an excellent platform for learning about electronics, programming, and physical computing (Raspberry Pi Ltd, 2022). DuckyScript is a simple scripting language that allows you to easily create keyboard macros and automate tasks on a computer. It is commonly used with a USB rubber ducky, a device that looks like a USB flash drive but can execute DuckyScript commands on a computer (Hak5 LLC, 2010).
              <br></br><br></br>
              It would be feasible to find the skills, software, and hardware needed for this project. Python and DuckyScript are widely used and well-documented languages, and there are many resources available for learning them. The Raspberry Pi Pico and other hardware components are readily available from online retailers and electronics stores. A development environment for Python and DuckyScript is needed (e.g. Thonny IDE), as well as any libraries and tools required for encryption and password management. Many of the tools that would be utilized are open source. The cryptography library can be used for obfuscation of passwords (Pyca, n.d.). CircuitPython will be used to dictate the behaviour of buttons and other hardware components (CircuitPython, n.d.). The Raspberry Pi Pico SDK also includes a variety of tools and libraries that can be used for this purpose in the case other methods don???t suffice (Raspberry Pi Ltd, n.d.). Other than the equipment listed above, tools such as breadboards and a soldering iron will be required in order to prototype and test the project.
              <br></br><br></br>
              If the Raspberry Pi Pico-based USB password manager project is successful, the outcome will be a compact and portable device that allows users to securely store and manage their passwords on a USB drive. The password manager will provide added security and control over password data, compared to online password managers which store data on remote servers. The successful development of this password manager will help to solve the problem of data breaches and online password managers, providing users with a secure and convenient solution for managing their passwords. The impact of this development will be to provide users with a secure and portable password management solution, and to reduce the risk of data breaches and cyber-attacks.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectIdea