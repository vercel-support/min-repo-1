import { queryField, nonNull, list } from 'nexus'

export const ChannelInterfaceFindCountQuery = queryField(
  'findManyChannelInterfaceCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ChannelInterfaceWhereInput',
      orderBy: list('ChannelInterfaceOrderByInput'),
      cursor: 'ChannelInterfaceWhereUniqueInput',
      distinct: 'ChannelInterfaceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.channelInterface.count(args as any)
    },
  },
)
