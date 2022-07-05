#!/bin/sh
FILES="*.pdf"
for f in $FILES
do
	echo "Processing $f file..."
	TARGET="output/${f%.*}"
	TARGETIMAGES="$TARGET/pages"
	TARGETPREVIEW="$TARGET/preview"
	rm -rf $TARGET
	mkdir -p $TARGETIMAGES
	mkdir -p $TARGETPREVIEW
	
	pdftoppm -r 300 -png "$f" "$TARGETIMAGES/page"
	
	IMAGES="$TARGETIMAGES/*.png"
	for i in $IMAGES
	do
		cwebp -quiet -resize 0 200 "$i" -o "${i%.*}.webp" 
		mv "${i%.*}.webp" "$TARGETPREVIEW"
		cwebp -quiet -q 50 "$i" -o "${i%.*}.webp" 
		rm "$i"
	done
	
	pdftotext -raw -enc UTF-8 "$f" "$TARGET/text.txt"
	# ^[0-9]+$ to remove page number... an option with pixel layout also exists but requires to know pdf size
	sed -i -r 's/"/\"/g; s/^[0-9]+$//g;' "$TARGET/text.txt"
	cat "$TARGET/text.txt" | tr '\n' '\r' > "$TARGET/text2.txt"
	rm "$TARGET/text.txt"
	mv "$TARGET/text2.txt" "$TARGET/text.txt"
	sed -i -r 's/[ \r]*\f/","/g; s/[\t\r]/ /g; s/[ ]+/ /g; s/^/["/g; s/","$/"]/g' "$TARGET/text.txt"

done
echo "Done"