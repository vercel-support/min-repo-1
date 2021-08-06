import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceUpdateOneMutation = mutationField(
  'updateOneChannelInterface',
  {
    type: nonNull('ChannelInterface'),
    args: {
      where: nonNull('ChannelInterfaceWhereUniqueInput'),
      data: nonNull('ChannelInterfaceUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.channelInterface.update({
        where,
        data,
        ...select,
      })
    },
  },
)
