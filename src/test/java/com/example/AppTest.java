package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AppTest {
    @Test
    public void testMultiply() {
        assertEquals(15, App.multiply(5, 3));
    }
}