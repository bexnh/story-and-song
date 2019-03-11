def markov_generate_from_lines_in_file(n, filehandle, count, level='char', max_gen=100):
    if level == 'char':
        glue = ''
        sequences = [item.strip() for item in filehandle.readlines()]
    elif level == 'word':
        glue = ' '
        sequences = [item.strip().split() for item in filehandle.readlines()]
    generated = markov_generate_from_sequences(n, sequences, count, max_gen)
    return [glue.join(item) for item in generated]
    for item in markov_generate_from_lines_in_file(3, open("story and song.txt"), 5, 'word'):
        print(item)
        print("")
