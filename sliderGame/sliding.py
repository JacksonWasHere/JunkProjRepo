import pygame
import random
import time

#pygame setup
pygame.init()

#important game variables
display_width=500
display_height=600

white=(255,255,255)
black=(0,0,0)

#create display and game clock
gameDisplay = pygame.display.set_mode((display_width,display_height))
pygame.display.set_caption('Sliding Puzzle')
clock = pygame.time.Clock()

#game functions
def rectangle(thingx,thingy,thingw,thingh,color):
    #draws a rectangle
    pygame.draw.rect(gameDisplay, color, [thingx, thingy, thingw, thingh])
def text_objects(text, font):
    #create a text object
    textSurface = font.render(text, True, black)
    return textSurface, textSurface.get_rect()
def message_display(text,x,y,size):
    #get the font
    largeText = pygame.font.Font('freesansbold.ttf',size)

    #create the surface and the area to put it in
    TextSurf, TextRect = text_objects(text, largeText)

    #place the text
    TextRect.center = (x,y)

    #display the text
    gameDisplay.blit(TextSurf, TextRect)

def move(board,location_x,location_y,direction):
    #up,right,down,left
    move_to = [(0,-1),(1,0),(0,1),(-1,0)][direction]

    if move_to[0]+location_x>=len(board) or move_to[0]+location_x<0 or move_to[1]+location_y>=len(board[0]) or move_to[1]+location_y<0:
        return
    temp=board[move_to[0]+location_x][move_to[1]+location_y]
    board[move_to[0]+location_x][move_to[1]+location_y] = board[location_x][location_y]
    board[location_x][location_y] = temp

def game_loop():
    crashed = False

    game_width = 4
    game_heigt = 4

    board=[]
    for x in range(game_width):
        board.append([])
        for y in range(game_heigt):
            board[x].append((x+y*game_heigt+1)%16)



    while not crashed:

        for event in pygame.event.get():
            if event.type==pygame.KEYDOWN:
                if event.key==pygame.K_UP:
                    move(board,)

        gameDisplay.fill(white)

        #draw board
        #-----------------------

        tile_width = display_width/game_width
        tile_height = display_height/game_heigt

        for x in range(len(board)):
            for y in range(len(board[x])):
                rectangle(x*tile_width,y*tile_height,tile_width,tile_height,white)
                message_display(str(board[x][y]),x*tile_width+tile_width/2,y*tile_height+tile_height/2,30)

        #-----------------------

        pygame.display.update()
        clock.tick(60)

game_loop()
pygame.quit()
quit()
