import { queryField, nonNull, list } from 'nexus'

export const ChannelInterfaceFindManyQuery = queryField(
  'findManyChannelInterface',
  {
    type: nonNull(list(nonNull('ChannelInterface'))),
    args: {
      where: 'ChannelInterfaceWhereInput',
      orderBy: list('ChannelInterfaceOrderByInput'),
      cursor: 'ChannelInterfaceWhereUniqueInput',
      distinct: 'ChannelInterfaceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.channelInterface.findMany({
        ...args,
        ...select,
      })
    },
  },
)
