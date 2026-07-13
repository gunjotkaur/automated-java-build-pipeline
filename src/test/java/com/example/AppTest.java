package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AppTest {
    @Test
    public void testMultiplication() {
        assertEquals(15, App.multiplication(5, 3));
    }
}