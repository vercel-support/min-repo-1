import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceDeleteOneMutation = mutationField(
  'deleteOneChannelInterface',
  {
    type: 'ChannelInterface',
    args: {
      where: nonNull('ChannelInterfaceWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.channelInterface.delete({
        where,
        ...select,
      })
    },
  },
)
