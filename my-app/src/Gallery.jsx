import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { getThemeProps } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { height } from "@material-ui/system";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: "#72a9be"
//   },
//   gridList: {
//     width: 500,
//     height: 450
//   }
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     cols: 2,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function ImageGridList(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList
//         cellHeight={160}
//         cellWidth={}
//         className={classes.gridList}
//         cols={3}
//       >
//         {props.tileData.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: " #72a9be",
    height: "200px"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
