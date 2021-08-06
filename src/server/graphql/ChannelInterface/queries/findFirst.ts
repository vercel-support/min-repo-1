import { queryField, list } from 'nexus'

export const ChannelInterfaceFindFirstQuery = queryField(
  'findFirstChannelInterface',
  {
    type: 'ChannelInterface',
    args: {
      where: 'ChannelInterfaceWhereInput',
      orderBy: list('ChannelInterfaceOrderByInput'),
      cursor: 'ChannelInterfaceWhereUniqueInput',
      distinct: 'ChannelInterfaceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.channelInterface.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
