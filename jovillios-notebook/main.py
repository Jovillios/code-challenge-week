# ======= Libraries used =======
from tkinter import *


window = Tk()
window.geometry("670x400")
window.title("Inote")


# ======= Function File =======
def newFile():
    newWindow = Tk()
    newWindow.geometry("670x400")
    newWindow.title("Inote")
    mainWindow(newWindow)
    newWindow.mainloop()



def save():
    return


def delete(text):
    text.delete(text.lineend.end)


def changeColor(color):
    textEditor.configure(fg=color)


def mainWindow(window):
    # ======= Global ========
    global textEditor
    # ======= Title ========
    titleLabel = Label(window, text="Inote", font="Arial 30", fg="orange")
    titleLabel.grid(row=0, columnspan=1, pady=10, padx=10)

    # ======= Text Editor =======
    textEditor = Text(window)
    textEditor.grid(row=2, columnspan=1, pady=0, padx=10)

    # ======= Tool Bar =======
    toolBar = Frame(window, bg="orange")
    newFileButton = Button(toolBar, text="New File", command=newFile)
    closeButton = Button(toolBar, text="Close File", command=window.destroy)
    saveButton = Button(toolBar, text="Save", command=save)
    deleteButton = Button(toolBar, text="Delete", command=lambda: delete(textEditor))
    redButton = Button(toolBar, text="Red", command=lambda: changeColor("red"))
    greenButton = Button(toolBar, text="Green", command=lambda: changeColor("green"))
    blueButton = Button(toolBar, text="Blue", command=lambda: changeColor("blue"))
    blackButton = Button(toolBar, text="Black", command=lambda: changeColor("black"))
    newFileButton.pack(side=LEFT, padx=10)
    closeButton.pack(side=LEFT, padx=10)
    saveButton.pack(side=LEFT, padx=10)
    deleteButton.pack(side=LEFT, padx=10)
    redButton.pack(side=LEFT, padx=10)
    greenButton.pack(side=LEFT, padx=10)
    blueButton.pack(side=LEFT, padx=10)
    blackButton.pack(side=LEFT, padx=10)
    toolBar.grid(row=1, columnspan=1, padx=10, pady=0)



mainWindow(window)
window.mainloop()
