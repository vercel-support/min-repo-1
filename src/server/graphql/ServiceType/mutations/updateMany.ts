import { mutationField, nonNull } from 'nexus'

export const ServiceTypeUpdateManyMutation = mutationField(
  'updateManyServiceType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ServiceTypeWhereInput',
      data: nonNull('ServiceTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.serviceType.updateMany(args as any)
    },
  },
)
