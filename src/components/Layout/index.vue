<script setup lang="ts">
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import sidebar from './sidebar.vue'
import navbar from './navbar.vue'
</script>

<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" class="flex items-center gap-2 font-semibold">
                        <Package2 class="h-6 w-6" />
                        <span class="">Acme Inc</span>
                    </a>
                    <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                        <Bell class="h-4 w-4" />
                        <span class="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div class="flex-1">
                    <sidebar />
                </div>
                <div class="mt-auto p-4">
                    <Card>
                        <CardHeader class="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" class="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <navbar />
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <router-view />
            </main>
        </div>
    </div>
</template>