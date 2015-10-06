package org.ramdhanu.education.util;

import java.io.File;

public class CreateWordUtil {

	public static void main(String[] args) {
		
		File dir = new File("./RamdhanuEducation/resource/eng/words/images");
		String a = dir.getAbsolutePath();
	    String[] children = dir.list();
	    
	    for (String filename : children) {
	    	String output = "<word><text>" + filename.split("\\.")[0] + "</text><image>" + filename + "</image></word>";
	    	System.out.println(output);
	    }
	}
}
