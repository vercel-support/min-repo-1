import { queryField, list } from 'nexus'

export const ChannelInterfaceAggregateQuery = queryField(
  'aggregateChannelInterface',
  {
    type: 'AggregateChannelInterface',
    args: {
      where: 'ChannelInterfaceWhereInput',
      orderBy: list('ChannelInterfaceOrderByInput'),
      cursor: 'ChannelInterfaceWhereUniqueInput',
      distinct: 'ChannelInterfaceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.channelInterface.aggregate({ ...args, ...select }) as any
    },
  },
)
