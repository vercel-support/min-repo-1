import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceUpdateManyMutation = mutationField(
  'updateManyChannelInterface',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ChannelInterfaceWhereInput',
      data: nonNull('ChannelInterfaceUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.channelInterface.updateMany(args as any)
    },
  },
)
