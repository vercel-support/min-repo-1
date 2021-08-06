import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceUpsertOneMutation = mutationField(
  'upsertOneChannelInterface',
  {
    type: nonNull('ChannelInterface'),
    args: {
      where: nonNull('ChannelInterfaceWhereUniqueInput'),
      create: nonNull('ChannelInterfaceCreateInput'),
      update: nonNull('ChannelInterfaceUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.channelInterface.upsert({
        ...args,
        ...select,
      })
    },
  },
)
