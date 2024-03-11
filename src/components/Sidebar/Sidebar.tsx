'use client'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import {
  IconBasket,
  IconBox,
  IconCheckoutPage,
  IconChevronDown,
  IconDollar,
  IconEarth,
  IconHome,
  IconImage,
  IconLeads,
  IconLeadsPage,
  IconPadlock,
  IconPhysicalProduct,
  IconPipeline,
  IconProductPage,
  IconQMark,
  IconSetting,
  IconSpeaker,
  IconUser,
  LogoSefloo,
} from '../icons'
import { usePathname, useRouter } from 'next/navigation'
import { ReactElement, cloneElement } from 'react'

const Sidebar = () => {
  const router = useRouter()
  const path = usePathname()

  const list = (
    <Box role="presentation">
      <List sx={{ textAlign: 'center' }}>
        <LogoSefloo />
      </List>
      <Divider />
      <List>
        {[
          {
            label: 'Dashboard',
            icon: <IconHome />,
            path: '/',
          },
          {
            label: 'Pages',
            icon: <IconEarth />,
            path: '/pages/leads-page',
            children: [
              {
                label: 'Leads Page',
                icon: <IconLeadsPage />,
                path: '/pages/leads-page',
              },
              {
                label: 'Product Page',
                icon: <IconProductPage />,
                path: '/pages/product-page',
              },
              {
                label: 'Checkout Page',
                icon: <IconCheckoutPage />,
                path: '/pages/checkout-page',
              },
            ],
          },
          {
            label: 'Product',
            icon: <IconBox />,
            path: '/product/digital-product',
            children: [
              {
                label: 'Digital Product',
                icon: <IconImage />,
                path: '/product/digital-product',
              },
              {
                label: 'Physical Product',
                icon: <IconPhysicalProduct />,
                path: '/product/physical-product',
              },
            ],
          },
          {
            label: 'Marketing',
            icon: <IconSpeaker />,
            path: '/marketing',
          },
          {
            label: 'Sales Management',
            icon: <IconBasket />,
            path: 'sales-management/pipeline',
            children: [
              {
                label: 'Pipeline',
                icon: <IconPipeline />,
                path: 'sales-management/pipeline',
              },
              {
                label: 'Leads',
                icon: <IconLeads />,
                path: 'sales-management/leads',
              },
            ],
          },
          {
            label: 'Financial',
            icon: <IconDollar />,
            path: 'financial',
          },
        ].map((item, index) => {
          const isActive = path === item.path
          return (
            <>
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (!item.children) {
                      router.push(item.path)
                    }
                  }}
                >
                  {cloneElement(item.icon, {
                    color: isActive ? '#0566EC' : '#A4AABA',
                  })}
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: isActive ? '#0566EC' : '#A4AABA',
                      fontWeight: 700,
                      marginLeft: '0.5rem',
                    }}
                  />
                  {item.children && <IconChevronDown />}
                </ListItemButton>
              </ListItem>
              <div>
                {item.children?.map((child) => {
                  const isActive = path === child.path
                  return (
                    <ListItem key={child.label}>
                      <ListItemButton
                        onClick={() => {
                          router.push(child.path)
                        }}
                      >
                        {cloneElement(child.icon, {
                          color: isActive ? '#0566EC' : '#A4AABA',
                        })}
                        <ListItemText
                          primary={child.label}
                          sx={{
                            marginLeft: '0.5rem',
                            color: isActive ? '#0566EC' : '#A4AABA',
                            fontWeight: 700,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </div>
            </>
          )
        })}
      </List>

      <List>
        <ListItem>
          <Typography
            variant="subtitle1"
            sx={{ color: '#A4AABA', fontSize: '0.6875rem' }}
          >
            OTHERS
          </Typography>
        </ListItem>
        {[
          {
            label: 'Sales',
            icon: <IconUser />,
            path: '/sales',
          },
          {
            label: 'Administrator',
            icon: <IconPadlock />,
            path: '/administrator',
          },
          {
            label: 'Settings',
            icon: <IconSetting />,
            path: '/settings',
          },
          {
            label: 'Help and Guide',
            icon: <IconQMark />,
            path: '/help',
          },
        ].map((item, index) => {
          const isActive = path === item.path
          return (
            <ListItem
              key={item.label}
              disablePadding
              onClick={() => router.push(item.path)}
            >
              <ListItemButton>
                {cloneElement(item.icon, {
                  color: isActive ? '#0566EC' : '#A4AABA',
                })}
                <ListItemText
                  primary={item.label}
                  sx={{
                    fontWeight: 700,
                    marginLeft: '0.5rem',
                    color: isActive ? '#0566EC' : '#A4AABA',
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <Box
      sx={{
        background: '#ffffff',
        maxHeight: '100vh',
        overflow: 'auto',
        width: '270px',
      }}
    >
      {list}
    </Box>
  )
}

export default Sidebar
