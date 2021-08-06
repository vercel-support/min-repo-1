import { mutationField, nonNull } from 'nexus'

export const ChannelInterfaceCreateOneMutation = mutationField(
  'createOneChannelInterface',
  {
    type: nonNull('ChannelInterface'),
    args: {
      data: nonNull('ChannelInterfaceCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.channelInterface.create({
        data,
        ...select,
      })
    },
  },
)
