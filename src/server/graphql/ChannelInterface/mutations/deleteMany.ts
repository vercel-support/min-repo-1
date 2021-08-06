import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceDeleteManyMutation = mutationField(
  'deleteManyChannelInterface',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ChannelInterfaceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.channelInterface.deleteMany({ where } as any)
    },
  },
)
