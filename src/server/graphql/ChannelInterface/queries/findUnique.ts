import { queryField, nonNull } from 'nexus'

export const ChannelInterfaceFindUniqueQuery = queryField(
  'findUniqueChannelInterface',
  {
    type: 'ChannelInterface',
    args: {
      where: nonNull('ChannelInterfaceWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.channelInterface.findUnique({
        where,
        ...select,
      })
    },
  },
)
