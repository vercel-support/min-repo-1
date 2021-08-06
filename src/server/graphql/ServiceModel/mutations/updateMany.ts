import { mutationField, nonNull } from 'nexus'

export const ServiceModelUpdateManyMutation = mutationField(
  'updateManyServiceModel',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ServiceModelWhereInput',
      data: nonNull('ServiceModelUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.serviceModel.updateMany(args as any)
    },
  },
)
